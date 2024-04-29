import React from "react";
import { Text, StyleSheet } from "react-native";

const Headline = ({ children, size = "md", style }) => {
  const Sizes = {
    sm: 24,
    md: 28,
    lg: 36,
    xl: 48,
  };

  const moderateScale = (size) => {
    // Burada moderateScale fonksiyonunun nasıl çalıştığını doldurun
    // Bu fonksiyon, belirli bir boyutu uygun bir ölçekte dönüştürür
    // Bu örnek için, belirli bir boyutu sadece doğrudan kullanıyoruz
    return size;
  };

  return (
    <Text style={[styles.headline, { fontSize: moderateScale(Sizes[size]) }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    textTransform: "capitalize",
    // Burada temanıza göre uygun bir renk belirtmelisiniz
    color: "black",
  },
});

export default Headline;
