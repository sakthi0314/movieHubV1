import React from "react";

function TrendDetailTv() {
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const [casts, setCasts] = useState([]);

  console.log(detail);

  // Fetch Detail
  const fetchDetail = async () => {
    const response = await axios.get(`/movie/${id}?api_key=${APP_KEY}`);
    const data = await response.data;
    setDetail(data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div style={{ marginTop: "8rem" }}>
      <h1>Trend tv{id}</h1>
    </div>
  );
}

export default TrendDetailTv;
