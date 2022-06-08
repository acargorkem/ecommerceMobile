import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import image1 from '../../../public/images/image1.jpg';
import {
  Entypo,
  MaterialIcons,
  Feather,
  SimpleLineIcons,
} from '@expo/vector-icons';

interface NavButtonProps {
  IconComponent: React.ElementType;
  iconName: string;
  text: string;
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  IconComponent,
  iconName,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.navButton}
      activeOpacity={0.65}
      onPress={onPress}
    >
      <IconComponent
        name={iconName}
        size={36}
        color="black"
        style={styles.navIcons}
      />
      <Text style={styles.navText}>{text}</Text>
      <MaterialIcons
        style={styles.forwardButtons}
        name="arrow-forward-ios"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

interface ProfileProps {
  onLogout: () => void;
}

// TODO : Get real user image and info from api
const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageContainer} source={image1} />
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userNameText}>Görkem Acar</Text>
        </View>
        <TouchableOpacity
          style={styles.forwardButtons}
          activeOpacity={0.65}
          onPress={onLogout}
        >
          <Entypo name="log-out" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.navButtonsWrapper}>
        <NavButton
          IconComponent={Feather}
          iconName="user"
          text="Profile"
          onPress={() => null}
        />
        <NavButton
          IconComponent={Feather}
          iconName="settings"
          text="Settings"
          onPress={() => null}
        />
        <NavButton
          IconComponent={SimpleLineIcons}
          iconName="handbag"
          text="Orders"
          onPress={() => null}
        />
        <NavButton
          IconComponent={Feather}
          iconName="gift"
          text="Coupons"
          onPress={() => null}
        />
        <NavButton
          IconComponent={Feather}
          iconName="clock"
          text="Recently Viewed"
          onPress={() => null}
        />
      </View>
    </View>
  );
};

export default Profile;
