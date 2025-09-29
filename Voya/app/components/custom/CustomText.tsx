import { Text as RNText } from "react-native";

export const CustomText = (props: any) => (
  <RNText
    {...props}
    style={[{ fontFamily: "Poppins_400Regular" }, props.style]}
  />
);
