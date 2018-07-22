import { compose, branch, renderComponent, renderNothing } from 'recompose';

const nonOptimalStates = states =>
  compose(
    ...states.map(({ when, render }) => {
      const component = render === 'NOTHING' ? renderNothing : renderComponent(render);

      return branch(when, component);
    })
  );

export default nonOptimalStates;
