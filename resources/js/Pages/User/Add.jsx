import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function List() {
  const { roles } = usePage().props;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    role: Yup.string().required("Role is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    router.post(route("user.store"), values, {
      onSuccess: () => {
        setSubmitting(false);
        resetForm();
      },
      onError: (errors) => {
        setSubmitting(false);
      },
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Users" />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full ">

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                role: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6 bg-white p-6 rounded-lg shadow">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="user@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="role" className="text-sm font-medium">
                      Role
                    </label>
                    <Select
                      name="role"
                      value={values.role}
                      onValueChange={(value) => setFieldValue("role", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role.id} value={role.name}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.get(route("user.index"))}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create User"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>


      </div>
    </AuthenticatedLayout>
  );
}
