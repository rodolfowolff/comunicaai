import React, { FC, ReactElement, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { ButtonContent, Item, ItemText, TouchableText } from "./styles";

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
  const { COLORS } = useTheme();
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    setVisible(!visible);
    openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton?.current?.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number
      ) => {
        setDropdownTop(py + h);
      }
    );
    setVisible(!visible);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(!visible);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <Item onPress={() => onItemPress(item)}>
      <AntDesign
        style={styles.icon}
        name={item.iconName || "down"}
        size={21}
        color={COLORS.BLACK}
      />
      <ItemText>{item.label}</ItemText>
    </Item>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <ButtonContent onPress={() => setVisible(!visible)}>
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            {data.length > 0 &&
              data.map((item) => (
                <Item key={item.value} onPress={() => onItemPress(item)}>
                  <AntDesign
                    style={styles.icon}
                    name={item.iconName || "down"}
                    size={25}
                    color={COLORS.BLACK}
                  />
                  <ItemText>{item.label}</ItemText>
                </Item>
              ))}

            {/* <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            /> */}
          </View>
        </ButtonContent>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={() => toggleDropdown()}
    >
      {renderDropdown()}
      <TouchableText>{(!!selected && selected.label) || label}</TouchableText>
      <AntDesign
        style={styles.icon}
        name={visible ? "down" : "right"}
        size={20}
        color={COLORS.BLACK}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e9e8e8",
    height: 50,
    width: "100%",
    zIndex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    // position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1C1C1C",
    borderRadius: 5,
    padding: 10,
    zIndex: 2,
  },
});

export default Dropdown;
