import { title } from '../global/selectors.js';
const showHideTitle = (flag) => {
    if (flag === 'block') {
        title.style.display = 'block';
    }
    else {
        title.style.display = 'none';
    }
};
export default showHideTitle;
