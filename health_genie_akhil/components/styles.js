import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#ese7eB",
    teritiary: "#1f2937",
    darkLight: "#9ca3af",
    brand: "#6d28d9",
    green: "#ef4444", 
};

const {primary, secondary, teritiary, darkLight, brand, green} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    backgroundColor: ${primary};
`;
export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px


    ${(props) => props.welcome && `
    font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${teritiary};

    ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    backgroundColor: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${teritiary};
`;

export const  StyledInputLabel = styled.Text`
     color: ${teritiary};
     font-size: 13px;
     text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    backgroundColor: ${brand};
    justify-content: flex-start;
    border-radius: 5px;
    align-items: center;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        padding: 25px;
    `}
`;

export const ButtonText = styled.Text`
     color: ${primary};
     font-size: 16px;

     ${(props) => props.google == true && `
        backgroundColor: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    flex-direction: row;
    color: ${teritiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justifyContent: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color:${brand};
    font-size: 15px;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

