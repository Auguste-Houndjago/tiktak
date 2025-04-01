import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getLatestUsers } from "@/services/user";
import { User } from "@/types/user";
import Link from "next/link";
import React from "react";

export default async function Profiles() {
  const profiles = await getLatestUsers();
  return (
    <div className="space-y-2 flex flex-col ">
      <span className="font-semibold text-center text-neutral-500">Latest Users</span>

      <ScrollArea className="h-72  rounded-md ">
      <ul className="space-y-2">
        {profiles.map((profile :User) => (
          <Link 
            href={`/user/${profile._id}`}
            key={profile._id}
            className="flex items-center gap-2 p-2 w-full h-full hover:bg-secondary bg-secondary/50 rounded-md"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={profile.picture_url} />
              <AvatarFallback className="uppercase">
                {profile.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold">{profile.name}</span>
          </Link>
        ))}
      </ul>
      </ScrollArea>
    </div>
  );
}
