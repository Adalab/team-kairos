import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form4Ambassador from './Form4Ambassador';
import Form3Talent from './Form3Talent';
import Form5LastCheck from './Form5LastCheck';
import '../styles/Form.scss';

const Form = props => {
  const { rol, getUserData, changeSteps, routerProps, devAsignation, codeState, descriptionState, taskState, ambassadorState, sendCheckedState, dataCheckedState } = props;
  const asignationId = routerProps.match.params.asignationId;
  const process = devAsignation.filter(item => item.id === asignationId);
  const { developer, emailDev, client, project, rate, date, code, description, task, ambassador, id, steps } = process[0];
  return (
    <div className="form__container">
      <section className="diagram">
        <div className="info-container-zoom">
          <p className="info-text">Pendiente de aprobación:</p>
          <div className="statusbox">
            {!steps.operations && <div className="info">o</div>}
            {!steps.talent && <div className="info">{!steps.talent ? 't' : ''}</div>}
            {!steps.ambassador && <div className="info">e</div>}
            {!steps.headend && <div className="info">h</div>}
            {steps.headend && <p className="info-end">asignación cerrada</p>}
          </div>
        </div>
      </section>

      <section>
        <Form1NewProject
          rol={rol}
          getUserData={getUserData}
          steps={steps}
          developer={developer}
          emailDev={emailDev}
          client={client}
          project={project}
          rate={rate}
          date={date}
        />
        <Form2Operations
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}
          code={code}
          description={description}
          task={task}
          id={id}
          codeState={codeState}
          descriptionState={descriptionState}
          taskState={taskState}
        />
        <Form3Talent
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}
          ambassador={ambassador}
          id={id}
          ambassadorState={ambassadorState}
        />
        <Form4Ambassador
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}
          sendCheckedState={sendCheckedState}
          id={id}
        />
        <Form5LastCheck
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}
          dataCheckedState={dataCheckedState}
          id={id}
        />
      </section>
      <div className="developer-container">
        <Link to="/developerlist"><button className="developer-button btn">Volver</button></Link>
      </div>
    </div>
  );
}

Form.propTypes = {
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
  codeState: PropTypes.string.isRequired,
  descriptionState: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  ambassadorState: PropTypes.string.isRequired,
  sendCheckedState: PropTypes.bool.isRequired,
  dataCheckedState: PropTypes.bool.isRequired
}

export default Form; 