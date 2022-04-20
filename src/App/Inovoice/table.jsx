import css from './table.module.css';

function Table() {
    return (
      <table className={css.ContainerTable}>
          <thead>
              <th>CODE</th>
              <th>DESCRIPTION/CODE CUSTOMER</th>
              <th>CASES</th>
              <th>UN</th>
              <th>NET W.</th>
              <th>GROSS W.</th>
              <th>PRICE</th>
              <th>AMOUNT</th>
          </thead>
          <tbody>
              <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
              </tr>
              <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
              </tr>
          </tbody>
      </table>
    );
  }
  
export default Table;