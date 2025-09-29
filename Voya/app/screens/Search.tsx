// screens/Search.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    image: require("../../assets/images/details/hotel1.jpg"),
  },
];

const Search = () => {
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
            <Text style={styles.subText}>Find events near</Text>
            <Text style={styles.location}>California, USA</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={22} color="#000" />
      </View>

      {/* Search Form */}
      <View style={styles.searchBox}>
        {/* Location */}
        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={18} color="#999" />
          <TextInput placeholder="London, England" style={styles.input} />
        </View>

        {/* Dates */}
        <View style={styles.row}>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="calendar-outline" size={18} color="#999" />
            <TextInput placeholder="20/07/25" style={styles.input} />
          </View>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="calendar-outline" size={18} color="#999" />
            <TextInput placeholder="26/07/25" style={styles.input} />
          </View>
        </View>

        {/* Guests / Rooms */}
        <View style={styles.row}>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="person-outline" size={18} color="#999" />
            <TextInput placeholder="1 Guest" style={styles.input} />
          </View>
          <View style={[styles.inputRow, styles.rowItem]}>
            <Ionicons name="bed-outline" size={18} color="#999" />
            <TextInput placeholder="1 Room" style={styles.input} />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>Find Hotel</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Hotels */}
      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Hotel</Text>
        <Text style={styles.link}>View All</Text>
      </View>

      <FlatList
        data={hotels}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hotelCard}>
            <Image source={item.image} style={styles.hotelImage} />
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelLocation}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  subText: { fontSize: 12, color: "#888" },
  location: { fontSize: 16, fontWeight: "600" },

  // Search Box
  searchBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    flex: 1,
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14, color: "#333" },

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
  sectionTitle: { fontSize: 18, fontWeight: "700" },
  link: { fontSize: 14, color: "#4F6DFF", fontWeight: "600" },

  // Hotel Cards
  hotelCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
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
  hotelName: { fontSize: 14, fontWeight: "600", marginTop: 8, marginLeft: 8 },
  hotelLocation: {
    fontSize: 12,
    color: "#888",
    marginLeft: 8,
    marginBottom: 8,
  },
});
