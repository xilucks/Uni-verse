// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    imgSrc: { type: "string", required: true },
    imgAlt: { type: "string", required: true },
    tags: { type: "list", required: true },
    createTime: { type: "date", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XWFDVKJU.mjs.map
