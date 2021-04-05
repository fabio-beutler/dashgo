import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Fabio Beutler</Text>
          <Text color='gray.300' fontSize='small'>
            dev.fabiobeutler@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Fabio Beutler'
        src='https://github.com/fabio-beutler.png'
      />
    </Flex>
  )
}
