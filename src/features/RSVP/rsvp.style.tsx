export const rsvpContainer = {
  textAlign: "center",
  padding: "2em",
  display: "flex",
  flexDirection: "column",
  gap: "2em",
  alignItems: "center",
};

export const cardWrapper = {
  maxWidth: 600,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2em",
};

export const feedbackWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
};

export const cardContent = {
  display: "flex",
  flexDirection: "column",
  gap: "2em",
  minWidth: "18em",
};

export const message = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  width: { xs: "18em", sm: "38em" },
};

export const modal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
