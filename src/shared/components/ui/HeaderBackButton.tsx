import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ArrowLeft } from "react-native-feather";
import { SvgProps } from "react-native-svg";
import { theme } from "shared/constants/theme";

interface HeaderBackButtonProps extends TouchableOpacityProps {
  iconProps?: SvgProps;
}

const HeaderBackButton = (props: HeaderBackButtonProps) => {
  return (
    <>
      {Platform.OS === "ios" ? (
        <TouchableOpacity
          {...props}
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              backgroundColor: theme.bgGray,
            },
            props.style,
          ]}
        >
          <ArrowLeft color={theme.textColorGray} {...props?.iconProps} />
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default HeaderBackButton;
