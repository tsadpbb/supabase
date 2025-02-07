import { PermissionAction } from '@supabase/shared-types/out/constants'
import { toast } from 'sonner'

import { useParams } from 'common'
import {
  ScaffoldSection,
  ScaffoldSectionContent,
  ScaffoldSectionDetail,
} from 'components/layouts/Scaffold'
import { useOrganizationUpdateMutation } from 'data/organizations/organization-update-mutation'
import { useCheckPermissions } from 'hooks/misc/useCheckPermissions'
import { useSelectedOrganization } from 'hooks/misc/useSelectedOrganization'
import { FormMessage_Shadcn_, Input_Shadcn_ } from 'ui'
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorTrigger,
} from 'ui-patterns/multi-select'
import { useOrganizationCustomerProfileQuery } from 'data/organizations/organization-customer-profile-query'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@ui/components/shadcn/ui/form'
import { FormPanel } from 'components/ui/Forms/FormPanel'
import { FormSection, FormSectionContent } from 'components/ui/Forms/FormSection'
import { FormActions } from 'components/ui/Forms/FormActions'
import { useEffect } from 'react'

const formSchema = z.object({
  billingEmail: z.string().email().optional(),
  additionalBillingEmails: z.string().email('email').array(),
})

const FORM_ID = 'org-billing-email'

const BillingEmail = () => {
  const { slug } = useParams()
  const selectedOrganization = useSelectedOrganization()

  const { name, billing_email } = selectedOrganization ?? {}

  const canUpdateOrganization = useCheckPermissions(PermissionAction.UPDATE, 'organizations')
  const canReadBillingEmail = useCheckPermissions(
    PermissionAction.BILLING_READ,
    'stripe.subscriptions'
  )

  const {
    data: billingCustomer,
    error: errorLoadingBillingCustomer,
    isLoading: loadingBillingCustomer,
  } = useOrganizationCustomerProfileQuery({ slug }, { enabled: canReadBillingEmail })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billingEmail: billing_email ?? '',
      additionalBillingEmails: billingCustomer?.additional_emails ?? [],
    },
  })

  useEffect(() => {
    if (billingCustomer) {
      form.setValue('additionalBillingEmails', billingCustomer.additional_emails ?? [])
    }
  }, [billingCustomer])

  const { mutate: updateOrganization, isLoading: isUpdating } = useOrganizationUpdateMutation()

  const onUpdateOrganizationEmail = async (values: z.infer<typeof formSchema>) => {
    if (!canUpdateOrganization) {
      return toast.error('You do not have the required permissions to update this organization')
    }
    if (!slug) return console.error('Slug is required')
    if (!name) return console.error('Organization name is required')

    updateOrganization(
      {
        slug,
        name,
        billing_email: values.billingEmail,
        additional_billing_emails: values.additionalBillingEmails,
      },
      {
        onSuccess: () => {
          toast.success('Successfully saved settings')
        },
      }
    )
  }

  if (!canReadBillingEmail) return null

  return (
    <ScaffoldSection>
      <ScaffoldSectionDetail>
        <div className="sticky space-y-2 top-12">
          <p className="text-foreground text-base m-0">Email Recipient</p>
          <p className="text-sm text-foreground-light m-0">
            All billing correspondence will go to this email
          </p>
        </div>
      </ScaffoldSectionDetail>
      <ScaffoldSectionContent>
        <Form {...form}>
          <form
            id={FORM_ID}
            onSubmit={form.handleSubmit(onUpdateOrganizationEmail)}
            className="space-y-8"
          >
            <FormPanel
              footer={
                <div className="flex py-4 px-8">
                  <FormActions
                    form={FORM_ID}
                    isSubmitting={isUpdating}
                    hasChanges={form.formState.isDirty}
                    handleReset={form.reset}
                    disabled={!canUpdateOrganization}
                    helper={
                      !canUpdateOrganization
                        ? 'You need additional permissions to update billing emails'
                        : undefined
                    }
                  />
                </div>
              }
            >
              <FormSection>
                <FormSectionContent fullWidth loading={loadingBillingCustomer}>
                  <FormField
                    control={form.control}
                    name="billingEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input_Shadcn_
                            type="email"
                            {...field}
                            placeholder="Email"
                            disabled={!canUpdateOrganization}
                          />
                        </FormControl>
                        <FormMessage_Shadcn_ />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalBillingEmails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional emails</FormLabel>
                        <FormControl>
                          <MultiSelector
                            values={form.getValues('additionalBillingEmails')}
                            onValuesChange={(v) => form.setValue('additionalBillingEmails', v)}
                          >
                            <MultiSelectorTrigger
                              label="Add additional recipients"
                              deletableBadge
                              badgeLimit="wrap"
                              showIcon={false}
                              mode="inline-combobox"
                            />
                            <MultiSelectorContent>
                              <MultiSelectorList creatable></MultiSelectorList>
                            </MultiSelectorContent>
                          </MultiSelector>
                        </FormControl>
                        <FormMessage_Shadcn_ />
                      </FormItem>
                    )}
                  />
                </FormSectionContent>
              </FormSection>
            </FormPanel>
          </form>
        </Form>
      </ScaffoldSectionContent>
    </ScaffoldSection>
  )
}

export default BillingEmail
