import { Text as RNText } from "react-native";
import { Theme } from "../../constants/theme";
export const CustomText = (props: any) => (
  <RNText {...props} style={[{ fontFamily: Theme.regular }, props.style]} />
);
