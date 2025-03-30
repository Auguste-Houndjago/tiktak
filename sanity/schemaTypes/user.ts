import { defineType, defineField } from 'sanity';


export const userType = defineType({
    title: "user",
    name: "user",
    type: "document",
    fields: [
        defineField({
            title: "Email",
            name: "email",
            type: "string"
        }),
        defineField({
            title: "Name",
            name: "name",
            type: "string"
        }),
        defineField({
            title: "Picture URL",
            name: "picture_url",
            type: "string"
        }),
    ]
})


// user.email 