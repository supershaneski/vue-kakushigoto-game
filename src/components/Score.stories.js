import Score from './Score.vue';

export default {
  title: 'Game/Score',
  component: Score,
};

const Template = (args) => ({
  components: { Score },
  setup() {
    return { args };
  },
  template: '<div :style="{width: \'115px\',}"><score v-bind="args" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  score: 1000,
};

export const Zero = Template.bind({});
Zero.args = {
  score: 0,
};

export const Win = Template.bind({});
Win.args = {
  score: 2000,
};

export const Digit1 = Template.bind({});
Digit1.args = {
  score: 5,
  iconPosition: 'right',
  iconType: 'robot',
};

export const Digit2 = Template.bind({});
Digit2.args = {
  score: 60,
  iconPosition: 'right',
  iconType: 'robot',
};

export const Digit3 = Template.bind({});
Digit3.args = {
  score: 725,
  iconPosition: 'right',
  iconType: 'robot',
};
