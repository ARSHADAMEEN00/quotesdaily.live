import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../../server/store/app";
import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Home() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.app.quotes);

  useEffect(() => {
    dispatch(getQuotes({ ayahNumber: 10 }));
  }, [dispatch]);

  console.log(quotes);

  const getRandomAyahNumber = () => Math.floor(Math.random() * 6236) + 1;

  return (
    <Container
      style={{
        minHeight: "70vh",
        marginTop: "80px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      maxWidth="xl"
    >
      <Card
        sx={{
          height: "auto",
          width: "60%",
          margin: "auto",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "35px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "20px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Typography variant="h6" color="" gutterBottom>
          {quotes?.text}
        </Typography>

        <Stack spacing={1} sx={{ marginTop: "20px" }}>
          <Typography variant="body1">
            Surah : {quotes?.surah?.name} ({quotes?.surah?.englishName}) -{" "}
            {quotes?.surah?.number}
          </Typography>

          <Typography variant="body1">
            Revelation type : {quotes?.surah?.revelationType}
          </Typography>
        </Stack>
      </Card>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
        }}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          dispatch(getQuotes({ ayahNumber: getRandomAyahNumber() }))
        }
      >
        Generate Another Quote
      </Button>
    </Container>
  );
}

export default Home;
