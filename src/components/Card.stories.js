import Card from './Card.vue';

export default {
  title: 'Game/Card',
  component: Card,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: String(4),
};

export const Five = Template.bind({});
Five.args = {
  text: String(5),
};

export const Ten = Template.bind({});
Ten.args = {
  text: String(10),
};
