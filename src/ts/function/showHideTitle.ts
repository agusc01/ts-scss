import { title } from '../global/selectors.js';
import { styleDisplay } from '../global/types.js';

const showHideTitle = (flag: styleDisplay) => {
  if (flag === 'block') {
    title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }
};

export default showHideTitle;
