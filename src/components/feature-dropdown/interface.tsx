export interface IFeatureButton {
  text: string;
  index?: number;
  currentIndex?: number;
  toggleIndex?: () => void;
  icon: React.JSX.Element;
}
