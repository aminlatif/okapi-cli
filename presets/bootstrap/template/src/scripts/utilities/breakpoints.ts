import styles from "./sassVariables";

const breakpoints: { [key: string]: number } = {};

breakpoints.breakpointXs = parseInt(styles.breakpointXs, 10);
breakpoints.breakpointSm = parseInt(styles.breakpointSm, 10);
breakpoints.breakpointMd = parseInt(styles.breakpointMd, 10);
breakpoints.breakpointLg = parseInt(styles.breakpointLg, 10);
breakpoints.breakpointXl = parseInt(styles.breakpointXl, 10);
breakpoints.breakpointXxl = parseInt(styles.breakpointXxl, 10);

export default breakpoints;
