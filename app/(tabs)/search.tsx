import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "react-native-heroicons/solid";
import SearchList from "@/components/searchList";

import { SelectList } from "react-native-dropdown-select-list";
const { width, height } = Dimensions.get("window");

const Search = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [tvShow, setTvShow] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const [selected, setSelected] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const data = [
    { key: "1", value: "Action" },
    { key: "2", value: "Romance" },
    { key: "3", value: "Horror" },
    { key: "4", value: "Drama" },
    { key: "5", value: "Comedy" },
    { key: "6", value: "Thriller" },
    { key: "7", value: "Sci-Fi" },
  ];

  const sort = [
    { key: "1", value: "a-z" },
    { key: "2", value: "top rated" },
    { ley: "3", value: "newest update" },
  ];

  return (
    <>
      <SafeAreaView
        className="flex-1
     w-full min-h-screen pb-8 pt-4"
      >
        <View>
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            className="mx-auto w-24 h-24"
          />
        </View>
        <View className=" items-center">
          <View
            className="justify-between items-center flex-row border rounded-xl mb-8 "
            style={{
              width: width * 0.9,
              height: height * 0.05,
            }}
          >
            <TextInput
              className="text-secondary w-[90%] pl-6 font-montserrat  font-semibold text-base"
              placeholder="Search"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity>
              <XMarkIcon size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          className=" z-50 min-h-16"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={{ width: width * 0.3 }} className="mx-2 mb-6 ">
            <SelectList
              setSelected={(val: React.SetStateAction<string>) =>
                setSelected(val)
              }
              data={data}
              save="value"
              boxStyles={{ marginBottom: 4 }}
              inputStyles={{ fontSize: 15 }}
              dropdownTextStyles={{ fontSize: 12 }}
              dropdownStyles={{ height: height * 1 }}
              placeholder="Genre"
              search={false}
            />
          </View>
          <View style={{ width: width * 0.3 }} className="mx-2 mb-6 max-h-max">
            <SelectList
              setSelected={(val: React.SetStateAction<string>) =>
                setSelected(val)
              }
              data={data}
              save="value"
              inputStyles={{ fontSize: 15 }}
              dropdownTextStyles={{ fontSize: 12 }}
              placeholder="Genre"
              dropdownStyles={{ height: height * 1 }}
              search={false}
            />
          </View>
          <View style={{ width: width * 0.3 }} className="mx-2 mb-6 max-h-max">
            <SelectList
              setSelected={(val: React.SetStateAction<string>) =>
                setSelected(val)
              }
              data={data}
              save="value"
              inputStyles={{ fontSize: 15 }}
              dropdownTextStyles={{ fontSize: 12 }}
              dropdownStyles={{ height: height * 1 }}
              placeholder="Genre"
              search={false}
            />
          </View>
        </ScrollView>
        <View className="w-full h-fit flex-row justify-end mt-2 mr-2 relative items-center">
          <Text className="text-lg">
            {sort.find((item) => item.key === selectedSort)?.value}
          </Text>
          <SelectList
            setSelected={setSelectedSort}
            fontFamily="lato"
            data={sort}
            arrowicon={<Bars3BottomRightIcon color="black" />}
            search={false}
            dropdownTextStyles={{ fontSize: 15 }}
            inputStyles={{ fontSize: 0 }}
            boxStyles={{
              borderRadius: 0,
              borderWidth: 0,
              position: "relative",
            }}
            dropdownStyles={{
              position: "absolute",
              zIndex: 10,
              backgroundColor: "white",
              marginRight: 12,
              right: 0,
              width: width * 0.8,
            }}
            placeholder={""}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <View className="mb-12 m-0">
            <Text className="text-2xl font-bold font-montserrat text-primary">
              Movies
            </Text>
            <SearchList item={movies} />

            <Text className="text-2xl font-bold font-montserrat text-primary mt-12">
              TV Shows
            </Text>
            <SearchList item={tvShow} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
