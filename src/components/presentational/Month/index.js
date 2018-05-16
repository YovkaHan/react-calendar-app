/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import moment from 'moment';
import Item from '../Item';
import PropTypes from 'prop-types'

const weekNaming = ['mo','tu','we','th','fr','sa','su'];

const dayTemplate = (i, date, onClick, cName) => {
  return (<Item
    key={i}
    cName={`day ${cName}`}
    onClick={() => {
      onClick.call(null, date)
    }}>
    {date}
  </Item>)
};

function days(date) {
  const daysCount = moment(date).daysInMonth();

  return new Array(daysCount).fill({});
}

const Month = (props) => {
  const week = [[],[],[],[],[],[],[]];
  const first = {
    value: moment(props.date).date(1).isoWeekday() - 1,
    passed: false
  };

  // Format "week"
  [...(new Array(first.value).fill(null)), ...days(props.date)].map((d, i) => {

    let weekDay = null;
    if(d) {
      const dateBuff = moment(props.date).date(i + 1 - first.value);

      weekDay = dateBuff.isoWeekday() - 1;
    }

    if (weekDay === first.value) {
      first.passed = true;
    }
    if (first.passed) {
      week[weekDay].push(moment(props.date).date(i + 1 - first.value).format('YYYY_MM_DD'));
    } else {
      week[i].push(null);
    }
  });
  return (
    <div className="c-month">
      {week.map((w, i) => {
        return (<Item key={i} cName="week">
          <Item cName="week-name">
            {weekNaming[i]}
          </Item>
          {w.map((d, j) => {
            if (!d) {
              return dayTemplate(j, d, null, 'empty')
            } else {
              return dayTemplate(j, d, props.onClick, '')
            }
          })
          }
        </Item>)
      })}
    </div>
  );
}

Month.propTypes = {
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Month;
