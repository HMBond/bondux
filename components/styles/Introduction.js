import { Component } from "react";
import Link from "next/link";

class Introduction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { content } = this.props;
    return (
      <div>
        {content.map((string, index) => (
          <div key={index}>{string}</div>
        ))}
      </div>
    );
  }
}

export default Introduction;
