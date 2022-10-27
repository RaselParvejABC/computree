import React from "react";
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 96,
  },
  view: {
    padding: 10,
  },
  title: {
    display: "block",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    display: "block",
  },
  image: {
    maxHeight: 200,
    display: "block",
    margin: "auto",
  },
});

const CourseAsPDF = ({ course }) => {
  return (
    <Document author="CompuTree" creator="CompuTree" producer="CompuTree">
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Text style={styles.title}>{course["title"]}</Text>
        </View>
        <View style={styles.view}>
          <Image style={styles.image} src={course["banner"]} />
        </View>
        <View style={styles.view}>
          {course["preamble"].map((paragraph) => (
            <Text style={styles.text}>paragraph</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CourseAsPDF;
