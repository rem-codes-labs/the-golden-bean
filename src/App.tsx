import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMemo, useState } from "react";
import { tokens } from "./theme";

const navItems = ["Home", "Menu", "Our Story", "Visit", "Contact"];

const heroImage =
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=80&fm=webp";

const highlights = [
  {
    title: "Small-batch sourcing",
    text: "We work with traceable farms and roast in limited runs for peak flavor.",
  },
  {
    title: "Sustainable packaging",
    text: "Compostable cups, refillable tins, and local partnerships reduce waste.",
  },
  {
    title: "Ceramics + craft",
    text: "Thoughtful ceramics, natural textures, and warm interiors.",
  },
];

const menuItems = [
  {
    name: "Golden Cortado",
    desc: "Citrus-forward espresso with steamed oat milk.",
    price: "$6",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80&fm=webp",
    alt: "Cortado in a ceramic cup",
  },
  {
    name: "Forest Matcha",
    desc: "Stone-milled matcha with a hint of sage honey.",
    price: "$7",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80&fm=webp",
    alt: "Matcha latte in ceramic mug",
  },
  {
    name: "Hazelnut Olive Cake",
    desc: "Light bites with citrus zest and olive oil.",
    price: "$5",
    img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80&fm=webp",
    alt: "Slice of cake on a plate",
  },
];

const visitDetails = [
  "Open daily 7:00 AM — 7:00 PM",
  "32 Orchard Lane, Amsterdam",
  "hello@thegoldenbean.com · (020) 555-0144",
];

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawer = useMemo(
    () => (
      <Box sx={{ p: 3 }} role="presentation" onClick={() => setDrawerOpen(false)}>
        <Stack spacing={2}>
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} underline="none">
              <Typography variant="h6">{item}</Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    ),
    []
  );

  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: tokens.warmCream, borderBottom: "1px solid rgba(47,46,44,0.08)" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            The Golden Bean
          </Typography>
          <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} underline="none">
                <Typography variant="body1">{item}</Typography>
              </Link>
            ))}
          </Stack>
          <IconButton
            aria-label="open navigation"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: tokens.text }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>

      <Box
        id="home"
        sx={{
          minHeight: { xs: 540, md: 640 },
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(47,46,44,0.55), rgba(47,46,44,0.55)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 640 }}>
            <Typography variant="h1">Coffee Crafted. Consciously.</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              A refined, sustainable coffee experience — carefully sourced, beautifully served.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" color="primary" size="large">
                Visit Us
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ borderColor: tokens.gold, color: "white" }}
              >
                Our Story
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={7}>
          <Box id="our-story">
            <Typography variant="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 760 }}>
              The Golden Bean is a luxury coffee bar blending refined design with ecological
              practices. We source small-batch, traceable beans and serve them in thoughtfully
              designed spaces—natural materials, warm neutrals, and an emphasis on slow, intentional
              moments.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" gutterBottom>
              Sustainability Highlights
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {highlights.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Card sx={{ height: "100%", background: "white" }}>
                    <CardContent>
                      <Typography variant="h3" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2">{item.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box id="menu">
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="baseline">
              <Typography variant="h2">Menu</Typography>
              <Typography variant="body1" color="text.secondary">
                Seasonal espresso, matcha, and light bites
              </Typography>
            </Stack>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {menuItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.name}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img}
                      alt={item.alt}
                      loading="lazy"
                      srcSet={`${item.img}&w=400 400w, ${item.img}&w=800 800w`}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3">{item.name}</Typography>
                        <Typography variant="body1" sx={{ color: tokens.gold, fontWeight: 600 }}>
                          {item.price}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box id="visit">
            <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
              <Box sx={{ flex: 1 }}>
                <Typography variant="h2" gutterBottom>
                  Visit
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Open daily. Find us for relaxed mornings and curated afternoons — view hours and
                  directions on our Visit page.
                </Typography>
                <Stack spacing={1.5}>
                  {visitDetails.map((detail) => (
                    <Typography key={detail} variant="body1">
                      {detail}
                    </Typography>
                  ))}
                </Stack>
                <Button variant="contained" sx={{ mt: 3 }}>
                  Get directions
                </Button>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80&fm=webp"
                    alt="Map placeholder for The Golden Bean"
                    loading="lazy"
                  />
                </Card>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Divider />

      <Box id="contact" sx={{ background: "#fff", py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
            <Box>
              <Typography variant="h6" gutterBottom>
                The Golden Bean
              </Typography>
              <Typography variant="body2">
                Luxury coffee, thoughtfully sourced and served.
              </Typography>
            </Box>
            <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
              {navItems.map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} underline="hover">
                  {item}
                </Link>
              ))}
            </Stack>
          </Stack>
          <Typography variant="caption" display="block" sx={{ mt: 3 }}>
            © 2026 The Golden Bean. Photo credits to Unsplash contributors.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
