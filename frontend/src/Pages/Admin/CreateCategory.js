import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../Components/Forms/CategoryForms";
import styles from "./CreateCategory.module.css";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //Handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        setName(""); // clear the input
        GetAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get All Category
  const GetAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong in Getting Category");
    }
  };

  useEffect(() => {
    GetAllCategory();
  }, []);

  //Update Category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is Updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        GetAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`Category is deleted`);
        GetAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Menu */}
          <div className="col-md-3 ps-0">
            <AdminMenu />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="d-flex flex-column gap-4">
              <h2 className={`text-center ${styles.heading}`}>
                Create Category
              </h2>

              {/* Form */}
              <div className="mb-4">
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>

              {/* Category Table */}
              <div className={`mx-auto ${styles.tableContainer}`}>
                <table className={styles.categoryTable}>
                  <thead className={styles.tableHeader}>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c) => (
                      <tr key={c._id} className={styles.tableRow}>
                        <td className={styles.categoryName}>{c.name}</td>
                        <td className={styles.actions}>
                          <button
                            className={styles.editBtn}
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                            aria-label="Edit Category"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className={styles.deleteBtn}
                            onClick={() => handleDelete(c._id)}
                            aria-label="Delete Category"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
        <CategoryForm
          value={updatedName}
          setValue={setUpdatedName}
          handleSubmit={handleUpdate}
        />
      </Modal>
    </Layout>
  );
};

export default CreateCategory;
