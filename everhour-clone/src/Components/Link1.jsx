import React from 'react';
import { Link } from 'react-router-dom';

const Link1 = () => {
  return (
    <div>
      <Link to="/asana">Asana · </Link>
      <Link to="/trello">Trello · </Link>
      <Link to="/clickup">ClickUp · </Link>
      <Link to="/jira">Jira · </Link>
      <Link to="/notion">Notion · </Link>
      <Link to="/basecamp">Basecamp · </Link>
      <Link to="/monday">Monday · </Link>
    </div>
  );
};

export default Link1;
