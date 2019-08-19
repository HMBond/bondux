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
        {content.map(quote => (
          <div key={quote.id}>{quote.string}</div>
        ))}
      </div>
    );
  }
}

export default Introduction;
