import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from "react-native";
import Constants from "expo-constants";

const colorGitHub = "#1e1e2e";
const imageGitHub = "https://avatars.githubusercontent.com/u/61121425?v=4";
const colorFontGitHub = "#C9D1D9";
const colorDarkFontGitHub = "#4F565E";
const urlToMyGitHub = "https://github.com/alexia-raphaela";

const Cell = ({ cell }) => {
  return (
    <View style={style.cell_container}>
      {cell === 0 ? (
        <View style={style.cell_off}></View>
      ) : (
        <View style={style.cell_on}></View>
      )}
    </View>
  );
};

const Row = ({ columns }) => {
  return (
    <View style={style.row_container}>
      {columns.map((cell, index) => {
        return <Cell cell={cell} key={index}></Cell>;
      })}
    </View>
  );
};

const Table = () => {
  const rows = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  return (
    <View style={style.table_container}>
      {rows.map((columns, index) => (
        <Row key={index} columns={columns}></Row>
      ))}
    </View>
  );
};

const App = () => {
  // passa para a view o stylesheet criado para container
  const handlePressGoToGitHub = async () => {
    console.log("Verificando link");
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
      console.log("link aprovado");
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={colorGitHub}
        barStyle="dark-content"
      ></StatusBar>
      <View style={style.content}>
        <Image
          accessibilityLabel="foto de perfil da Aléxia Raphaela"
          style={style.avatar}
          source={{ uri: imageGitHub }}
        />
        <Text
          accessibilityLabel="Aléxia Raphaela"
          style={[style.defaultText, style.name]}
        >
          Alexia Raphaela
        </Text>
        <Text
          accessibilityLabel="Aléxia Raphaela Da Silva"
          style={[style.defaultText, style.nickname]}
        >
          alexiaraphaelaSilva
        </Text>
        <Text
          accessibilityLabel="aluna impacta em análise e desenvolvimento de sistemas"
          style={[style.defaultText, style.discription]}
        >
          aluna impacta em análise e desenvolvimento de sistemas
        </Text>
        <Text style={style.defaultText}>2 followers · 1 following</Text>
      </View>
      <Table />
      <Pressable onPress={handlePressGoToGitHub}>
        <View style={style.button}>
          <Text style={[style.defaultText]}>Open in GitHub</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

// cria um estilo
const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 1,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  discription: {
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    marginTop: 25,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cell_container: {
    flexDirection: "row",
    width: 25,
    padding: 2,
    borderRadius: 20,
  },
  cell_on: {
    backgroundColor: "#32CD32",
    flex: 5,
    height: 20,
    borderRadius: 20,
  },
  cell_off: {
    backgroundColor: "#006400",
    flex: 5,
    height: 20,
    borderRadius: 20,
  },
  row_container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colorGitHub,
  },
  table_container: {
    paddingTop: Constants.statusBarHeight,
  },
});
