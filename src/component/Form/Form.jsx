import { useState } from "react";
import List from "component/List/List";

const Form = () => {
  const [feeds, setFeeds] = useState([]);

  return <List feeds={feeds} setFeeds={setFeeds} />;
};

export default Form;
