const QrCodeDisplay = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
    <p>Escaneá este código QR para pagar con tu billetera digital:</p>
    <img src="/img/qr-placeholder.png" alt="QR de pago" style={{ width: "200px" }} />
  </div>
  );
};

export default QrCodeDisplay;