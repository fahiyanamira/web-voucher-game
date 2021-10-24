import React from "react";
import Input from "../../../../components/atoms/Input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;
//generate component kita ke storybooknya:
export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
