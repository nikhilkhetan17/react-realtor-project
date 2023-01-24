import React from "react";
import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange(e) {
    setFormData(e.target.value);
  }

  return (
    <main className="max-w-md mx-auto px-2">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a List</h1>

      <form>
        <p className="text-lg mt-6  font-semibold">Sell / Rent</p>
        <div className="flex gap-x-6 justify-center items-center">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold ">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Property Name"
          maxLength="32"
          minLength="6"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700  border-gray-300 transition ease-in-out mb-6"
        />

        <div className="flex justify-start items-center gap-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="40"
              required
              className="px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out border-gray-300 w-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="40"
              required
              className="px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out border-gray-300 w-full"
            />
          </div>
        </div>

        <p className="text-lg mt-6  font-semibold">Parking spot</p>
        <div className="flex gap-x-6 justify-center items-center">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6  font-semibold">Furnished</p>
        <div className="flex gap-x-6 justify-center items-center">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold ">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          maxLength="200"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700  border-gray-300 transition ease-in-out mb-6"
        />

        <p className="text-lg font-semibold ">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="description"
          maxLength="200"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700  border-gray-300 transition ease-in-out mb-6"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex gap-x-6 justify-center items-center mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium uppercase shadow-md rounded active:shadow-lg transition ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <div className="flex mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex  items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="5000000000"
                required
                className="px-4 py-2 text-lg text-gray-700 rounded transition ease-in-out"
              />
              {type === "rent" && (
                <div>
                  <p className="text-md font-medium w-full ">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex  items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="10"
                  max="5000000000"
                  required={offer}
                  className="px-4 py-2 text-lg text-gray-700 rounded transition ease-in-out"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md font-medium w-full ">$ / Month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6 images).
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg/"
            multiple
            required
            className="py-1.5 text-gray-700 bg-white w-full rounded px-3 border border-gray-300 transition ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full rounded py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 uppercase shadow-md active:bg-blue-900 transition  ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
