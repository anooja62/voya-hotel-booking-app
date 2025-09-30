// screens/Search.tsx
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/custom/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import { CustomText } from "../components/custom/CustomText";
import { Theme } from "../constants/theme";
const hotels = [
  {
    id: "1",
    name: "Elysium Gardens",
    location: "London, England",
    rating: 4.5,
    image: require("../../assets/images/details/hotel1.jpg"),
  },
  {
    id: "2",
    name: "California, USA",
    location: "London, England",
    rating: 4.5,
    image: require("../../assets/images/hotel/hotel2.jpeg"),
  },
];

const Search = () => {
  type SignUpProp = NativeStackNavigationProp<RootStackParamList, "Signup">;
  const navigation = useNavigation<SignUpProp>();
  return (
    <View style={styles.container}>
      {/* Top - Location & Profile */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.avatar}
          />
          <View>
            <CustomText style={styles.subText}>Find events near</CustomText>
            <CustomText style={styles.location}>California, USA</CustomText>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={22} color="#000" />
      </View>

      {/* Search Form */}
      <View style={styles.searchBox}>
        {/* Location */}
        <View style={styles.inputRow}>
          <Ionicons name="location-outline" size={18} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Enter Location"
            placeholderTextColor={Theme.gray}
          />
        </View>

        {/* Dates */}
        <View style={styles.row}>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="calendar-outline" size={18} color="#999" />
            <TextInput
              placeholder="Check-in"
              style={styles.input}
              placeholderTextColor={Theme.gray}
            />
          </View>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="calendar-outline" size={18} color="#999" />
            <TextInput
              placeholder="Check-out"
              style={styles.input}
              placeholderTextColor={Theme.gray}
            />
          </View>
        </View>

        {/* Guests / Rooms */}
        <View style={styles.row}>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="person-outline" size={18} color="#999" />
            <TextInput
              placeholder="2 Guests"
              style={styles.input}
              placeholderTextColor={Theme.gray}
            />
          </View>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="bed-outline" size={18} color="#999" />
            <TextInput
              placeholder="1 Room"
              style={styles.input}
              placeholderTextColor={Theme.gray}
            />
          </View>
        </View>

        {/* Button */}
        <PrimaryButton
          title="Search"
          onPress={() => navigation.navigate("HotelsListing")}
        />
      </View>

      {/* Popular Hotels */}
      <View style={styles.popularHeader}>
        <CustomText style={styles.sectionTitle}>Popular Hotel</CustomText>
        <CustomText
          style={styles.link}
          onPress={() => navigation.navigate("HotelsListing")}
        >
          View All
        </CustomText>
      </View>

      <View style={{ height: 200 }}>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 4 }}
          style={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.hotelCard}
              onPress={() => navigation.navigate("Details", { hotel: item })}
            >
              <Image source={item.image} style={styles.hotelImage} />
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <CustomText style={styles.ratingText}>{item.rating}</CustomText>
              </View>
              <CustomText style={styles.hotelName}>{item.name}</CustomText>
              <CustomText style={styles.hotelLocation}>
                {item.location}
              </CustomText>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: 16,
    paddingTop: 60,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  subText: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "500",
    marginBottom: 6,
    fontFamily: Theme.medium,
  },
  location: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: Theme.semiBold,
    color: "#000000",
  },

  // Search Box
  searchBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EDEDED",
    marginBottom: 20,
    height: 300,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7FF",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    flex: 1,
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14, color: "#000" },

  row: { flexDirection: "row", justifyContent: "space-between" },
  rowItem: { flex: 1, marginRight: 8 },

  searchButton: {
    backgroundColor: "#4F6DFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  searchText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  // Popular Section
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#181818",
    fontFamily: Theme.semiBold,
    lineHeight: 27,
  },
  link: { fontSize: 16, color: Theme.primary, fontWeight: "500" },

  // Hotel Cards
  hotelCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 6,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  hotelImage: { width: "100%", height: 100 },
  ratingBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: "center",
  },
  ratingText: { marginLeft: 4, fontSize: 12, fontWeight: "600" },
  hotelName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8,
  },
  hotelLocation: {
    fontSize: 12,
    color: "#888",
    marginLeft: 8,
    marginBottom: 8,
  },
});
