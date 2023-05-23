import {Meta, StoryObj} from "@storybook/react";
import PostCard, {PostCardProps} from "../../components/home/PostCard";

const meta: Meta<typeof PostCard> = {
    title: 'Example/PostCard',
    component: PostCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Primary: { args: PostCardProps } = {
    args:{
        title: 'test',
        subTitle: '테스트 내용이 담겨져 있죠',
        imgSrc: '',
        imgAlt: '이미지',
        tags: ['안녕', '태그2', '태그3'],
        createTime: new Date(),
    },

}
