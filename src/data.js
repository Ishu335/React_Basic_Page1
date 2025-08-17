import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'A syntax extension for JavaScript that is used with React to describe what the UI should look like.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Short for "properties". They enable passing data from parent to child components.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'A way to manage and track data that can change over time in a component.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components Example',
    description:
      'Components let you split the UI into independent, reusable pieces.',
    code: `<div>
  <h2>Welcome</h2>
  <p>This is a component example</p>
</div>`,
  },
  jsx: {
    title: 'JSX Example',
    description:
      'JSX looks like HTML, but it is actually syntax for JS & React.',
    code: `<p>Hello JSX!</p>`,
  },
  props: {
    title: 'Props Example',
    description:
      'Props are how components talk to each other.',
    code: `<WelcomeMessage name="Ishwar" />`,
  },
  state: {
    title: 'State Example',
    description:
      'State lets a component keep track of changing information.',
    code: `function Example() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
