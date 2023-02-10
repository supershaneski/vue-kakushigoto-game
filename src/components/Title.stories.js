import Title from './Title.vue';

export default {
  title: 'Game/Title',
  component: Title,
};

const Template = (args) => ({
  components: { Title },
  setup() {
    return { args };
  },
  template: '<Title v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Kaku4510",
};

export const Japanese = Template.bind({});
Japanese.args = {
  text: "かく4510",
};
