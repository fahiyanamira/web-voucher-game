import React from "react";
import StepItem from "../../../../components/molecules/StepItem";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
};

const Template = (args) => <StepItem {...args} />;
//generate component kita ke storybooknya:
export const Default = Template.bind({});
Default.args = {
  icon: "step1",
  title: "1. Start",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
};
