import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jqueryui';
import marked from 'marked';

interface TabProps {
  title: string;
  content: string;
}

const Tab: React.FC<TabProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

const Articles: React.FC = () => {
  const [tabs, setTabs] = useState([{ title: '', content: '' }]);

  useEffect(() => {
    const fetchTabs = async () => {
      const tab1 = await fetch('example1.md')
       .then(response => response.text());

      const tab2 = await fetch('example2.md')
       .then(response => response.text());

      setTabs([
        { title: 'Example 1', content: tab1 },
        { title: 'Example 2', content: tab2 },
      ]);
    };

    fetchTabs();
  }, []);

  useEffect(() => {
    $(function () {
      $('#tabs').tabs();
    });
  }, [tabs]);

  return (
    <div id="tabs">
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <a href={`#tab-${index + 1}`}>{tab.title}</a>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <Tab key={index} title={tab.title} content={tab.content} />
      ))}
    </div>
  );
};

export default Articles;

<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"></link>