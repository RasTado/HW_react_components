import React from "react";
import classes from "./css/main.module.css";

const dayWName = [
  "Воскресение",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const monthName = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export default function Calendar(props) {
  const { date } = props;
  return (
    <div className={classes["ui-datepicker"]}>
      <div className={classes["ui-datepicker-material-header"]}>
        <div className={classes["ui-datepicker-material-day"]}>
          {dayWName[date.getDay()]}
        </div>
        <div className={classes["ui-datepicker-material-date"]}>
          <div className={classes["ui-datepicker-material-day-num"]}>
            {date.getDate()}
          </div>
          <div className={classes["ui-datepicker-material-month"]}>
            {monthName[date.getMonth()]}
          </div>
          <div className={classes["ui-datepicker-material-year"]}>
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className={classes["ui-datepicker-header"]}>
        <div className={classes["ui-datepicker-title"]}>
          <span className={classes["ui-datepicker-month"]}>
            {monthName[date.getMonth()]}
          </span>
          &nbsp;
          <span className={classes["ui-datepicker-year"]}>
            {date.getFullYear()}
          </span>
        </div>
      </div>
      <table className={classes["ui-datepicker-calendar"]}>
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className={classes["ui-datepicker-week-end"]}></col>
          <col className={classes["ui-datepicker-week-end"]}></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes["ui-datepicker-other-month"]}>27</td>
            <td className={classes["ui-datepicker-other-month"]}>28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className={classes["ui-datepicker-today"]}>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
