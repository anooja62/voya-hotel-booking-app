import { Text as RNText } from "react-native";

export const CustomText = (props: any) => (
  <RNText {...props} style={[{ fontFamily: "Poppins-Regular" }, props.style]} />
);
