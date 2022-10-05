import React, { useState } from "react";
import ImagePicker from "../../components/ImagePicker";
import Layout from "../../components/Layout";
import { brandConditions, brandData } from "../../data/BrandsData";
import classNames from "classnames";
import Button from "../../components/Button";
import { Link } from "gatsby";
import BrandStatus from "../../components/Listbox/BrandStatus";

export default function BrandDetail(props) {
  const [isEdit, setIsEdit] = useState(false);
  // temporary, should call some api
  const id = props.params.id;
  const data = brandData.find((d) => d.id == id);
  const [state, setState] = useState(data);
  const [selectedCondition, setSelectedCondition] = useState(
    brandConditions.find(
      (c) => c.value == (data.active ? "active" : "inactive")
    )
  );

  const onChangeText = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div>
        {/* nav */}
        <nav className="py-8 flex items-center">
          <Link to="/brands">
            <img
              src="/images/arrow-left.png"
              className="w-6 h-6 cursor-pointer mr-4"
            />
          </Link>

          <h1 className="text-darkBlue text-2xl font-semibold">
            Brand Details
          </h1>
        </nav>
        <div className="w-1/2">
          {/* logo */}
          <div>
            <h2 className="text-sm text-blackText font-semibold py-3 border-b border-bgGray">
              Brand Logo
            </h2>
            <ImagePicker isEdit={isEdit} imageURL={data.logo} />
          </div>
          {/* detail */}
          <div className="mt-8">
            <h1 className="text-sm font-semibold text-blackText border-b border-bgGray py-3">
              Brand Detail
            </h1>
            <div className="mt-4">
              <div className="flex items-center gap-x-8">
                <div className="flex-1">
                  <h4 className="text-sm text-popoverText">Brand Name</h4>
                  {!isEdit ? (
                    <p className="mt-3 text-sm text-blackText font-semibold uppercase">
                      {state.name}
                    </p>
                  ) : (
                    <input
                      onChange={onChangeText}
                      name="name"
                      className="w-full outline-none mt-1 px-3 py-2 border border-grayText rounded text-sm text-blackText .placeholder-popoverText"
                      placeholder="Input Content"
                      value={state.name}
                    />
                  )}
                </div>
                <div className="relative flex-1">
                  <h4 className="text-sm text-popoverText">Brand Status</h4>
                  <BrandStatus
                    isEdit={isEdit}
                    selectedCondition={selectedCondition}
                    setSelectedCondition={setSelectedCondition}
                  />
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm text-popoverText">Brand Description</h4>
                {isEdit ? (
                  <textarea
                    onChange={onChangeText}
                    name="desc"
                    value={state.desc}
                    rows={4}
                    placeholder="Input Description"
                    className="w-full outline-none mt-1 px-3 py-2 border border-grayText rounded text-sm text-blackText .placeholder-popoverText"
                  />
                ) : (
                  <p className="mt-3 text-sm text-blackText font-semibold">
                    {data.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Button
            onClick={() => setIsEdit(true)}
            type="blue"
            label={isEdit ? "Save Change" : "Edit Information"}
            className="mt-12 border-none text-sm text-white px-4 py-2 border border-popoverGrayText rounded"
          />
        </div>
      </div>
    </Layout>
  );
}
