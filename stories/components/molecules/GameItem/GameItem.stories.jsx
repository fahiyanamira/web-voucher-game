import React from "react";
import GameItem from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
};

const Template = (args) => <GameItem {...args} />;
//generate component kita ke storybooknya:
export const Default = Template.bind({});
Default.args = {
  title: "Super Mechs",
  category: "Mobile",
  thumbnail: "/img/Thumbnail-1.png",
};
