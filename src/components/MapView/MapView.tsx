const MapView = ({
  latitude,
  longitude,
}: {
  latitude?: number;
  longitude?: number;
}) => {
  return (
    <div
      style={{
        height: "85%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        style={{ border: 0, width: "100%", height: "100%" }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyC2H6JZlLH6HgGdtrgkzj5qN992dicjs10&center=${latitude}, ${longitude}&zoom=14&maptype=satellite`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MapView;
