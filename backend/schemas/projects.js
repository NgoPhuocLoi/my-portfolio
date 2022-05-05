export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "thumb",
      title: "Thumb",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          name: "thumb",
          title: "Thumb",
          type: "image",
        },
      ],
    },
  ],
};
