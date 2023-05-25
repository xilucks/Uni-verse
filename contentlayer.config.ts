import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        imgSrc: { type: "string", required: true },
        imgAlt: { type: "string", required: true },
        tags: { type: "list", of: { type: 'string' }, required: true },
        createTime: { type: "date", required: true},
    },
}));

export default makeSource({
    contentDirPath: "src/posts",
    documentTypes: [Post],
});