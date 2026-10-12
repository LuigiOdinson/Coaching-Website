import { useState } from "react";

export default function useLoadNumber(initialNumber, totalCount) {
  const [loadNumber, setLoadNumber] = useState(initialNumber);

  const toggle = () => {
    setLoadNumber(prev => (prev > initialNumber ? initialNumber : totalCount));
  }

  return {loadNumber, toggle};
}