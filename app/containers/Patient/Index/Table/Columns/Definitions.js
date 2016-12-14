import genderRenderer from './Renderer/GenderRenderer';
import ActionRenderer from './Renderer/ActionRenderer';
import ageRenderer from './Renderer/AgeRenderer';

/**
 * Column Definitions
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
export default class ColumnDefinitions {

  /**
   * Selection Column
   *
   * @returns {{headerName: string, width: number, checkboxSelection: boolean, suppressSorting: boolean, suppressMenu: boolean, pinned: boolean}}
   */
  getSelection() {
    return {
      headerName: '',
      width: 30,
      checkboxSelection: true,
      suppressSorting: true,
      suppressMenu: true,
      pinned: true
    }
  }

  /**
   * ID Column
   *
   * @returns {{headerName: string, field: string, enableRowGroup: boolean, enablePivot: boolean, width: number, pinned: boolean, editable: boolean, cellEditorFramework: *}}
   */
  getId() {
    return {
      headerName: "#",
      field: "id",
      width: 50,
      pinned: true,
    };
  }

  /**
   * Firstname Column
   *
   * @returns {{headerName: string, field: string, enableRowGroup: boolean, enablePivot: boolean, width: number, pinned: boolean, editable: boolean, cellEditorFramework: *}}
   */
  getFirstname() {
    return {
      headerName: "Firstname",
      field: "firstname",
      pinned: true,
    };
  }

  /**
   * Lastname Column
   *
   * @returns {{headerName: string, field: string, enableRowGroup: boolean, enablePivot: boolean, width: number, pinned: boolean, editable: boolean, cellEditorFramework: *}}
   */
  getLastname() {
    return {
      headerName: "Lastname",
      field: "lastname",
      pinned: true,
    };
  }

  getAge() {
    return {
      headerName: "Age",
      field: "birthdate",
      pinned: true,
      cellRenderer: ageRenderer
    };
  }

  /**
   * Email Column
   *
   * @returns {{headerName: string, field: string, enableRowGroup: boolean, enablePivot: boolean, width: number, pinned: boolean, editable: boolean, cellEditorFramework: *}}
   */
  getEmail() {
    return {
      headerName: "E-Mail",
      field: "email",
      pinned: true,
    }
  }

  /**
   * Gender Column
   *
   * @returns {{headerName: string, field: string, enableRowGroup: boolean, enablePivot: boolean, width: number, pinned: boolean, editable: boolean, cellEditorFramework: *}}
   */
  getGender() {
    return {
      headerName: "Gender",
      field: "gender",
      pinned: true,
      suppressSorting: true,
      suppressMenu: true,
      cellRenderer: genderRenderer
    }
  }

  getAction() {
    return {
      headerName: '',
      field: 'id',
      pinned: true,
      suppressSorting: true,
      suppressMenu: true,
      cellRendererFramework: ActionRenderer
    }
  }

  getPhone() {
    return {
      headerName: "Phone",
      field: "phone",
      pinned: true
    }
  }

  getMobile() {
    return {
      headerName: "Mobile",
      field: "mobile",
      pinned: true
    }
  }

  getInsurance() {
    return {
      headerName: "Insurance",
      field: "insurance_no",
      pinned: true
    }
  }

  getColumnDefinitions() {
    return [
      this.getSelection(),
      this.getId(),
      this.getFirstname(),
      this.getLastname(),
      this.getEmail(),
      this.getGender(),
      this.getAge(),
      this.getPhone(),
      this.getMobile(),
      this.getInsurance(),
      this.getAction()
    ];
  }
}